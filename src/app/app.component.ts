import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  submitted = false;
  step = 1;

  userModel = new User();

  constructor(private _enrollmentService: EnrollmentService) {}

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('success', data),
      (error) => console.log('error', error)
    );
  }

  nextStep() {
    this.step += 1;
  }

  previousStep() {
    this.step -= 1;
  }
  
}
