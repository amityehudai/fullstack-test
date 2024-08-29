import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Publisher} from "./types";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {
    }

    getPublishers(): Observable<any> {
        return this.http.get<Array<Publisher>>('http://localhost:4300/api/publishers');
    }
}
