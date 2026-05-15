from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.playlist import router as playlist_router

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "MoodBeat Backend Running 🚀"
    }


app.include_router(playlist_router)