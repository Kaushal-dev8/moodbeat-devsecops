from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app.auth.jwt_handler import create_access_token
from app.database.deps import get_db
from app.models.user import User

router = APIRouter()


class SignupData(BaseModel):
    username: str
    email: str
    password: str


class LoginData(BaseModel):
    email: str
    password: str


@router.post("/signup")
def signup(
    user: SignupData,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:

        return {
            "error": "Email already exists"
        }

    new_user = User(
        username=user.username,
        email=user.email,
        password=user.password
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message": "User created successfully"
    }


@router.post("/login")
def login(
    user: LoginData,
    db: Session = Depends(get_db)
):

    found_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not found_user:

        return {
            "error": "Invalid credentials"
        }

    if found_user.password != user.password:

        return {
            "error": "Invalid credentials"
        }

    token = create_access_token(
        {
            "sub": found_user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }