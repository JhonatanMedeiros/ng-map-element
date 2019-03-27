import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class GeoMapComponent implements OnInit {

  @Input() msg = 'Default msg :)';

  constructor() { }

  ngOnInit() {
  }

}
