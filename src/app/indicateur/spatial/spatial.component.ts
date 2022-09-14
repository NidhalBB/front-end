import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spatial',
  templateUrl: './spatial.component.html',
  styleUrls: ['./spatial.component.scss']
})
export class SpatialComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    
    // Initialize and add the map
function initMap(): void {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: uluru,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
  }

}
