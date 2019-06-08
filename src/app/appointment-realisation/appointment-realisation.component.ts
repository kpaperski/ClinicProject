import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentDetailsModel} from './models/appoitment-details.model';
import {AppointmentRealisationService} from './services/appointment-realisation.service';
import {ExaminationModel} from '../different-models/models/examination.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReferralModel} from '../different-models/models/referral.model';

@Component({
  selector: 'app-appointment-realisation',
  templateUrl: './appointment-realisation.component.html',
  styleUrls: ['./appointment-realisation.component.css']
})
export class AppointmentRealisationComponent implements OnInit {
  examinationIdToAdd: number;
  referralToAdd: ReferralModel;
  examinationList: ExaminationModel[];
  appointmentID: number;
  appointmentDetails: AppointmentDetailsModel;

  constructor(private route: ActivatedRoute, private service: AppointmentRealisationService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.fetchAppointmentInfo();
    this.referralToAdd = new ReferralModel();
  }

  fetchAppointmentInfo() {
    this.appointmentID = Number(this.route.snapshot.params.appointmentId);
    this.service.fetchAppointment(this.appointmentID).then((appointment: AppointmentDetailsModel) => this.appointmentDetails = appointment);
    this.service.fetchExaminationList().then((list: ExaminationModel[]) => this.examinationList = list);
  }

  onAddExaminationClicked(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addExaminationToAppointment(content) {
    this.service.addExamination(this.appointmentID, this.examinationIdToAdd);
    content.close();
  }

  changeExaminationID(ID: number) {
    this.examinationIdToAdd = Number(ID);
  }

  onAddReferralClicked(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title1'});
  }

  addReferralToAppointment(content) {
    this.service.addReferral(this.appointmentID, this.referralToAdd).then(referral => console.log(referral));
    content.close();
  }

  onPatientCardClicked() {
    this.router.navigate(['patientCard/' + this.appointmentDetails.patient.id + '/' + this.appointmentDetails.doctorID]);
  }
}
