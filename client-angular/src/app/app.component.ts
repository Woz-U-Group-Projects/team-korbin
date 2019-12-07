import { Component } from '@angular/core';
import { NewRecipeModalComponent } from './new-recipe-modal/new-recipe-modal.component';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DelishUs';
  navbarOpen = false;

  closeResult: string;
  modalOptions:NgbModalOptions;
  constructor(
    private modalService: NgbModal
  ){
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }
  
  open() {
    const modalRef = this.modalService.open(NewRecipeModalComponent);
    modalRef.componentInstance.my_modal_title = 'New Recipe';
    // modalRef.componentInstance.my_modal_content = 'I am your content';
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
