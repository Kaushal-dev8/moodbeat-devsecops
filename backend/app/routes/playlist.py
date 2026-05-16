from fastapi import APIRouter

router = APIRouter()

playlists = {
    "chill": [
        {
            "title": "Heat Waves",
            "artist": "Glass Animals"
        },
        {
            "title": "Sunflower",
            "artist": "Post Malone"
        }
    ],

    "focus": [
        {
            "title": "Time",
            "artist": "Hans Zimmer"
        },
        {
            "title": "Experience",
            "artist": "Ludovico Einaudi"
        }
    ],

    "gym": [
        {
            "title": "Stronger",
            "artist": "Kanye West"
        },
        {
            "title": "Till I Collapse",
            "artist": "Eminem"
        }
    ]
}


@router.get("/moods")
def get_moods():
    return {
        "moods": list(playlists.keys())
    }


@router.get("/playlist/{mood}")
def get_playlist(mood: str):

    mood = mood.lower()

    if mood not in playlists:
        return {
            "error": "Mood not found"
        }

    return {
        "mood": mood,
        "songs": playlists[mood]
    }