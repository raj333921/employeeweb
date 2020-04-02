import {Injectable} from '@angular/core';
import { EhomeDetails } from '../ehome/ehomeDetails';

@Injectable({
providedIn: 'root'
})
export class StorageService{

constructor() {}

    private ehomeDetails: EhomeDetails = new EhomeDetails();

    setEhomDetails(val){
        this.ehomeDetails = val;
    }

    getEhomDetails(){
        return this.ehomeDetails;
    }

    invalidEhomDetails(){
        return this.ehomeDetails = new EhomeDetails();
    }
}
