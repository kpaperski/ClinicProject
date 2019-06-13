import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentDetailsModel} from './models/appoitment-details.model';
import {AppointmentRealisationService} from './services/appointment-realisation.service';
import {ExaminationModel} from '../examinations/models/examination.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReferralModel} from './models/referral.model';
import {AppointmentExaminationModel} from './models/appointment-examination.model';
import {ScopeOfExaminationModel} from './models/scope-of-examination.model';

@Component({
  selector: 'app-appointment-realisation',
  templateUrl: './appointment-realisation.component.html',
  styleUrls: ['./appointment-realisation.component.css']
})
export class AppointmentRealisationComponent implements OnInit {
  examinationIdToAdd: number;
  scopeOfExaminationList: ScopeOfExaminationModel[];
  referralToAdd: ReferralModel;
  appointmentExamination: AppointmentExaminationModel;
  examinationList: ExaminationModel[];
  appointmentID: number;
  appointmentDetails: AppointmentDetailsModel;

  constructor(private route: ActivatedRoute, private service: AppointmentRealisationService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.fetchAppointmentInfo();
    this.referralToAdd = new ReferralModel();
    this.referralToAdd.scope = new ScopeOfExaminationModel();
    this.appointmentExamination = new AppointmentExaminationModel();
  }

  fetchAppointmentInfo() {
    this.appointmentID = Number(this.route.snapshot.params.appointmentId);
    this.service.fetchAppointment(this.appointmentID).then((appointment: AppointmentDetailsModel) => this.appointmentDetails = appointment);
    this.service.fetchExaminationList().then((list: ExaminationModel[]) => this.examinationList = list);
    this.service.fetchScopeOfExamination().then((list: ScopeOfExaminationModel[]) => this.scopeOfExaminationList = list);
  }

  onAddExaminationClicked(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  addExaminationToAppointment(content) {
    this.appointmentExamination.appointmentID = this.appointmentID;
    this.appointmentExamination.examinationID = this.examinationIdToAdd;
    this.service.addExamination(this.appointmentExamination).then();
    content.close();
    this.service.fetchAppointment(this.appointmentID).then((appointment: AppointmentDetailsModel) => this.appointmentDetails = appointment);
  }

  changeExaminationID(ID: number) {
    this.examinationIdToAdd = Number(ID);
  }

  onAddReferralClicked(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title1'});
  }

  addReferralToAppointment(content) {
    this.referralToAdd.appointmentID = this.appointmentID;
    this.service.addReferral(this.referralToAdd).then(referral => console.log(referral));
    content.close();
    this.service.fetchAppointment(this.appointmentID).then((appointment: AppointmentDetailsModel) => this.appointmentDetails = appointment);
  }

  onPatientCardClicked() {
    this.router.navigate(['patientCard/' + this.appointmentDetails.patient.id + '/' + this.appointmentDetails.doctorID]);
  }
}
