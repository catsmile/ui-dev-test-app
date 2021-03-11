import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'my-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public get isAuthorized() {
    return !!this.sessionService.getAuthInfo();
  }

  constructor(
    private readonly sessionService: SessionService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  showAuthForm() {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  showProfileForm() {

  }
}
