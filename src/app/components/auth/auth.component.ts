import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public username: string = '';
  public password: string  = '';

  constructor(
    private readonly dialogRef: MatDialogRef<AuthComponent>,
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close();
  }
}
