from fastapi import FastAPI
from app.routes.playlist import router as playlist_router

app = FastAPI()


@app.get("/")
def root():
    return {
        "message": "MoodBeat Backend Running 🚀"
    }


app.include_router(playlist_router)