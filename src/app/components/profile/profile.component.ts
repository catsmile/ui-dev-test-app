import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<ProfileComponent>,
  ) { }

  ngOnInit(): void {

  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
