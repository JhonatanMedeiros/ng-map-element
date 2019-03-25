import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.scss']
})
export class GeoMapComponent implements OnInit {

  @Input() msg = 'Default msg :)';

  constructor() { }

  ngOnInit() {
  }

}
