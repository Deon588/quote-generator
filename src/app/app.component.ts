import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Item } from './models/item.model';
import { Project } from './models/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	itemForm: FormGroup;
	projectForm: FormGroup;
	project: Project = new Project();
	item: Item;
	newItem: boolean = null;
	showReport: boolean = false;
	
	
	
	constructor(private fb: FormBuilder) {
		this.itemForm = fb.group({
			'name': ['', Validators.required],
			'height': ['', Validators.required],
			'length': ['', Validators.required],
			'width': ['', Validators.required],
			'qty': ['', Validators.required],
			'priceM3': ['', Validators.required],			
		});
		
		this.projectForm = fb.group({
			'name': ['', Validators.required],
			'markup': ['', Validators.required],
			'hardwareCost': ['', Validators.required],
			'labourCost': ['', Validators.required],
			'sandingCost': ['', Validators.required],
			'sundriesCost': ['', Validators.required]
		});
	}
	
	calculateTotal(project: any) {
		this.project.name = project.name;		
		this.project.markup = project.markup;
		this.project.hardwareCost = project.hardwareCost;
		this.project.labourCost = project.labourCost;
		this.project.sandingCost = project.sandingCost;
		this.project.sundries = project.sundriesCost;		
		this.project.totalItemsCost = 0;
		
		if (this.project.items.length > 0) {
			for (var i = 0; i < this.project.items.length; i++) {
				console.log(`items cost${this.project.totalItemsCost}`);
				this.project.totalItemsCost += this.project.items[i].totalPrice;
			}
		}
		let multiplier: number = 1 + this.project.markup / 100;
		console.log("multiplier:" + multiplier);
		let markedUpCost: number = +this.project.totalItemsCost * +multiplier;
		this.project.totalCost = markedUpCost + +project.hardwareCost + +project.labourCost + +project.sandingCost + +project.sundriesCost;
		console.log(this.project);
		this.showReport = true;		
	}
	
	addNewItem() {
		this.newItem = true;		
	}
	
	addItem(item: any) {
		this.item = item;
		this.item.volumeM3 = item.height * item.length * item.width;
		this.item.totalPrice = item.volumeM3 * item.priceM3;
		console.log(this.item);
		this.project.items.push(this.item);
		this.newItem = false;
		this.item = new Item();
		this.itemForm.reset();
		console.log(this.project);
	}
	
	ngOnInit() {
		this.project.items = [];
	}
	
	deleteItem(item: Item) {
		let index = this.project.items.indexOf(item);
		this.project.items.splice(index, 1);
	}
	
	cancelItem() {
		this.newItem = false;
		this.itemForm.reset();
		this.item = new Item();
	}
	
	dismissReport() {
		this.showReport = false;
	}
	
	newQuote() {
		this.newItem = false;
		this.showReport = false;
		this.item = new Item();
		this.project = new Project();
		this.itemForm.reset();
		this.projectForm.reset();
	}
  
}
