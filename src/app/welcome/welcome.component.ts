// package com.riabi.springboot.web;
// import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

// @ComponentScan (
//         value = "com.riabi.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// public class SprinBootFirstWebApplication implements SomeInterface {
export class WelcomeComponent implements OnInit {

  // String message = "some welcome message";
  message = 'some welcome message';
  welcomeMessageFromService: string;
  name = '';

  // public SprinBootFirstWebApplication() {

  // ActivatedRouter
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {
  }

  // void init () {
  ngOnInit() {
    console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
   // console.log('last line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter() {
   // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    // console.log('last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromService = error.error.message;

  }
}
