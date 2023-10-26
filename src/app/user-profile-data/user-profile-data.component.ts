import { Component } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile-data',
  templateUrl: './user-profile-data.component.html',
  styleUrls: ['./user-profile-data.component.css'],
})
export class UserProfileDataComponent {
  // variables
  imageUrl: string | ArrayBuffer | null | undefined = null;
  file: File | null = null;

  // icons
  imageIcon = faImage;

  // image_functions
  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.displayImage();
  }

  displayImage() {
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
      };
      reader.readAsDataURL(this.file);
    }
  }

  onSubmit() {}
}
