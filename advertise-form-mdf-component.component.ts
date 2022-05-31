import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Advertise } from 'src/app/entities/advertise.entity';
import { AdvertisementService } from 'src/app/services/advertisement.service';

@Component({
  selector: 'app-advertise-form-mdf-component',
  templateUrl: './advertise-form-mdf-component.component.html',
//   styleUrls: ['./advertise-form-mdf-component.component.css'],
//  outputs : ['advertiseListData']
})


export class AdvertisementFormMDFComponent {

  
    public name_of:string = '';
  
    details:Array<Advertise> = new Array();
    //details:Array<any> = new Array();
  
    //advertiseListData:EventEmitter<Array<Advertise>> = new EventEmitter();
    increamentById = 1;
  
    productForm = new FormGroup({
      title : new FormControl('', [Validators.required, Validators.minLength(3)]),
      name : new FormControl('', [Validators.required, Validators.minLength(3)]),
      category : new FormControl('', [Validators.required]),
      Description : new FormControl('', [Validators.required])
    })
  
    advertises:any =[];
    constructor(private advertiseServices : AdvertisementService){
        this.advertiseServices.getAllAdvertises().subscribe((serverResponse:any)=>{
            console.log('serverResponse',serverResponse);
            this.advertises=serverResponse;
        })
      }
    submitProuctDetails = () => {
    let new_advertise = {id: this.productForm.value.id,
      title: this.productForm.value.title,
      name: this.productForm.value.name,
      category: this.productForm.value.category,
      description: this.productForm.value.description
      };
      this.advertiseServices.addNewAdvertises(new_advertise).subscribe((serverResponse)=>{
          console.log('createNewProduct - serviceResponse :',serverResponse);
          this.advertises.push(serverResponse);
      })
  
    console.log(this.productForm.value);
    }
  
  advertiseDelete(advertiseId:any){
      this.advertises.splice(advertiseId, 1);
  this.advertiseServices.deleteAdvertises(advertiseId).subscribe((serverResponse)=>{
  console.log('deleteAdvertise - serviceResponse :',serverResponse);
  this.advertiseServices.deleteAdvertises(serverResponse);
  })
  console.log(this.productForm.value);
  }
  
  }
  
  
