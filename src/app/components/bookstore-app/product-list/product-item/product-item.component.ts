import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../product-list.component.service';

@Component({
  selector: 'spa-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!:BooksService;
  constructor() { }

  ngOnInit(): void {
  }

}
