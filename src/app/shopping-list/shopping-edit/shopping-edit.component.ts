import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddItem() {
    const imgName = this.nameInputRef.nativeElement.value;
    const imgAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(imgName, imgAmount);
    this.slService.addIngredient(newIngredient);
  }
}
