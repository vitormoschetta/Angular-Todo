import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    get(key: string): any {
        let item = localStorage.getItem(key)
        return item
    }

    set(object: any, key: string) {
        localStorage.setItem(key, JSON.stringify(object))
    }

    remove(key: string) {
        localStorage.removeItem(key)
    }
}
