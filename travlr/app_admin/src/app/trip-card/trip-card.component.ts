import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrl: './trip-card.component.css'
})


export class TripCardComponent implements OnInit {
  
  @Input('trip') trip: any;
  @Output() tripDeleted = new EventEmitter<string>();

  constructor(
    private router: Router,
    private tripDataService: TripDataService
  ) { }

  ngOnInit(): void {
  
  }

  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public deleteTrip(trip: Trip) {
    this.tripDataService.deleteTrip(this.trip.code)
      .subscribe({
        next: () => {
          console.log(`Trip ${this.trip.name} deleted successfully!`);
        },
        error: (err: any) => {
          console.error('Error deleting trip: ', err);
        }
      })
    this.tripDeleted.emit(this.trip.code);
  }

}