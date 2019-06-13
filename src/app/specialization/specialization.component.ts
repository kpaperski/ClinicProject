import { Component, OnInit } from '@angular/core';
import {SpecializationModel} from './models/specialization.model';
import {SpecializationService} from './services/specialization.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent implements OnInit {
  specializationList: SpecializationModel[];
  searchSpecialization: string;
  specializationToAdd: SpecializationModel;
  image = '../../../assets/images/kosz.jpg';

  constructor(private service: SpecializationService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.service.fetchSpecializationList().then((list: SpecializationModel[]) => this.specializationList = list);
    this.specializationToAdd = new SpecializationModel();
  }

  onNewSpecializationButtonClick(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addSpecialization(content) {
    this.service.addSpecialization(this.specializationToAdd).then((specialization: SpecializationModel) => console.log(specialization));
    content.close();
    this.router.navigate(['']);
  }

  clickOnBin(specializationID: number) {
    this.service.deleteSpecialization(specializationID).subscribe();
    this.router.navigate(['']);
  }

}
