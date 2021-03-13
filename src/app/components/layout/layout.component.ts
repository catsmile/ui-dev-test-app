import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'my-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  showProfileForm() {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '400px',
      position: {
        top: '70px',
        right: '10px'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // nothing for now
    });
  }
}
