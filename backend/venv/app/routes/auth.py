from fastapi import APIRouter
from pydantic import BaseModel

from app.auth.jwt_handler import create_access_token

router = APIRouter()

fake_users_db = []


class SignupData(BaseModel):
    username: str
    email: str
    password: str


class LoginData(BaseModel):
    email: str
    password: str


@router.post("/signup")
def signup(user: SignupData):

    fake_users_db.append(user.dict())

    return {
        "message": "User created successfully"
    }


@router.post("/login")
def login(user: LoginData):

    found_user = None

    for db_user in fake_users_db:

        if (
            db_user["email"] == user.email
            and
            db_user["password"] == user.password
        ):
            found_user = db_user
            break

    if not found_user:
        return {
            "error": "Invalid credentials"
        }

    token = create_access_token(
        {
            "sub": user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }