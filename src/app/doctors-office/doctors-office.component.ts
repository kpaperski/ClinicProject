import { Component, OnInit } from '@angular/core';
import {DoctorsOfficeService} from './services/doctors-office.service';
import {DoctorsOfficeModel} from './models/doctors-office.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctors-office',
  templateUrl: './doctors-office.component.html',
  styleUrls: ['./doctors-office.component.css']
})
export class DoctorsOfficeComponent implements OnInit {
  officeList: DoctorsOfficeModel[];
  searchOffice: string;
  officeToAdd: DoctorsOfficeModel;

  constructor(private service: DoctorsOfficeService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.fetchDoctorsOfficeList().then((list: DoctorsOfficeModel[]) => this.officeList = list);
    this.officeToAdd = new DoctorsOfficeModel();
  }

  onNewOfficeButtonClick(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addOffice(content) {
    this.service.addOffice(this.officeToAdd).then((office: DoctorsOfficeModel) => console.log(office));
    content.close();
  }

}
