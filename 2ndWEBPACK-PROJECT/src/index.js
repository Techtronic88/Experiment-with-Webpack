import { run } from "./app/app";
import "./main.scss"
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
const alertService = new AlertService();
console.log("HI");
const componentService = new ComponentService();
run(alertService, componentService);
console.log("Hi");