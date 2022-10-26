import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FilesService } from './services/files.service';
import { TokenService } from './services/token.service';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  token = '';
  imgRta = '';

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private fileService: FilesService,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    const token = this.tokenService.getToken();
    if (token) {
      this.authService.profile()
      .subscribe();
    }
  }

  createUser() {
    this.userService.create({
      name: 'Oscar',
      email: 'oscar@gmail.com',
      password: '12345',
      role: 'customer'
    })
    .subscribe(response => console.log(response))
  }

  getProfile() {
    this.authService.profile()
    .subscribe(response => {
      console.log(response)
    })
  }

  downloadFile() {
    this.fileService.getFile('my_pdf.pdf',
      'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
      'application/pdf').subscribe()
  }

  uploadFile(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    if (file) {
      this.fileService.uploadFile(file)
      .subscribe(rta => {
        this.imgRta = rta.location;
      })
    }
  }
}
