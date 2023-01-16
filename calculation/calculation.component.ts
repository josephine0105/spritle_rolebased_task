import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {

  form!: FormGroup;
  total: any = 0;
  values:any=[];
  answers:any=[]
  type: any = [
    { id: 0, name: 'choose', value: 'choose' },
    { id: 1, name: 'ADD', value: '+' },
    { id: 2, name: 'SUBTRACT', value: '-' },
    { id: 1, name: 'MULTIPLY', value: '*' },
    { id: 1, name: 'DIVIDE', value: '%' },
  ];
  constructor(public _service:ServiceService){

  }
  ngOnInit() {
    this.form = new FormGroup({
      firstValue: new FormControl(null,[ Validators.required,Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),

      secondValue: new FormControl(null, [Validators.required,Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
      choose: new FormControl(null, Validators.required),
    });
  }
  onChange(event: any) {
    
  }
  onSubmit() {
    
    if (this.form.value.choose == 'ADD') {
      this.total = Math.round(
        JSON.parse(this.form.value.firstValue) +
          JSON.parse(this.form.value.secondValue)

      );
      
      this.values.push(this.form.value)
      this.values.forEach((ele:any) => {
        console.log(ele,'ele')
        ele.firstValue=ele.firstValue,
        ele.secondValue=ele.secondValue,
        ele.answer= this.total 
        
      });
     
      
    } else if (this.form.value.choose == 'SUBTRACT') {
      this.total = Math.round(
        JSON.parse(this.form.value.firstValue) -
          JSON.parse(this.form.value.secondValue)
      );
      this.values.push(this.form.value)
      this.values.forEach((ele:any) => {
        console.log(ele,'ele')
        ele.firstValue=ele.firstValue,
        ele.secondValue=ele.secondValue,
        ele.answer= this.total 
        
      });
    } else if (this.form.value.choose == 'MULTIPLY ') {
      this.total = Math.round(
        JSON.parse(this.form.value.firstValue) *
          JSON.parse(this.form.value.secondValue)
      );
      console.log(this.total)
      this.values.push(this.form.value)
      this.values.forEach((ele:any) => {
        console.log(ele,'ele')
        ele.firstValue=ele.firstValue,
        ele.secondValue=ele.secondValue,
        ele.answer= this.total 
        
      });
    } else {
      this.total = Math.round(
        JSON.parse(this.form.value.firstValue) %
          JSON.parse(this.form.value.secondValue)
      );
      this.values.push(this.form.value)
      this.values.forEach((ele:any) => {
        console.log(ele,'ele')
        ele.firstValue=ele.firstValue,
        ele.secondValue=ele.secondValue,
        ele.answer= this.total 
        
      });
    }
    this.answers=this.values
    this._service.sessionSetItem('is_calculation',JSON.stringify(this.answers))
    console.log(this.answers,'valiuessssssssssssssssssssss')
  }
  get f() {
    return this.form.controls;
  }

}
