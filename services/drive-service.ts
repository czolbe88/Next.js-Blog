import {GoogleAuth} from "google-auth-library";
import {google} from "googleapis";

const credentials = {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?.replace(/\\n/g, '\n'),
}

const auth = new GoogleAuth({credentials,   scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.photos.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
],});

const driveService = google.drive({version: "v3", auth })

export default driveService;