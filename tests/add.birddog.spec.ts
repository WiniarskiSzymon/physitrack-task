import HomePgae from "../pages/home.pgae";
import LoginPage from "../pages/login.page";
import SelectServerModal from "../pages/select.server.modal";
import SelectServerPage from "../pages/select.server.page";
import DemoExercisesPage from "../pages/exercieses/exercises.demo.page";
import ProgramEditorPage from "../pages/program/program.editor.page";
import AssignProgramPage from "../pages/program/assign.program.page";
import PatientProgramSettingsPage from "../pages/program/patient.program.settings.page";
import patients from "../assets/patients.json";
import messagesJson from "../assets/messages.json";
import PatientsPage from "../pages/patients.page";
const patient = patients[0];
const messages = messagesJson;

describe("Adding exercises", async function () {
  it("Should add dogbird to plan", async () => {
    await HomePgae.pressLoginButton();
    await SelectServerModal.selectCountry("USA");
    await SelectServerPage.selectCountryByValue("us");
    await SelectServerPage.pressContinueButton();
    await LoginPage.goBackToDemo();

    await DemoExercisesPage.addExerciseToBasket(patient.plan.excercises[0]);
    await DemoExercisesPage.editProgram();
    await ProgramEditorPage.openAssignProgramModal();

    await AssignProgramPage.assignPlanToPatientByNameAndSurname(
      patient.firstName,
      patient.lastName
    );
    const assignmentMessage = await PatientProgramSettingsPage.getAssignmentMessage();
    const patientName = await PatientProgramSettingsPage.getPatientName();
    expect(assignmentMessage).toEqual(messages.planAssignedMessage);
    expect(patientName).toEqual(patient.name);
    await PatientProgramSettingsPage.close();

    const programEditorAssignedPatient = await ProgramEditorPage.getAssignedPatient();
    expect(programEditorAssignedPatient).toEqual(patient.name);
    await ProgramEditorPage.close();

    await DemoExercisesPage.navigationBar.navigateToPatientsPage();
    let patients = await PatientsPage.getAllPatientsNames();
    let angelaPlan = await PatientsPage.getPatientPlan(patient.name);
    expect(patients).toEqual([patient.name]);
    expect(angelaPlan).toEqual(patient.plan.planName);
  });
});
