import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Input()
  public enlace: string = '';
  @Input()
  public enlaceName: string = '';
  @Input()
  public iconName?: string;

  ngOnInit() {}
}
