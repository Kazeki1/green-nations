import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  // @Input() item = <MenuItem>null;

  constructor() { }

  ngOnInit() {
  }

}
