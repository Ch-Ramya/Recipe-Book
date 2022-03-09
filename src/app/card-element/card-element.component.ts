import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css']
})
export class CardElementComponent implements OnInit {
  @Input()cardId ;
  @Input()cardCategory = "";
  @Input()cardTitle = "";
  @Input()cardPublisher ="";
  @Input()cardImage = "";
  @Input()cardDescription = "";
  @Input()imageDisplayStyle = "";

  @Output()onClick = new EventEmitter<any>();

  public isCardImage: boolean = true;
  public cardOwnerExist : boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.isCardImage = !!this.cardImage;
    this.cardOwnerExist = !!this.cardPublisher;
  }

  onClickHandler(id: number){
    this.onClick.emit(id);
  }
}
