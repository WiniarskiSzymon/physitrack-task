class AssignProgramPage {
  get assignModal() {
    return $("#assign-protocol");
  }

  get dropdown() {
    return this.assignModal.$('div[class="assign-patient-select-container"]');
  }

  get patientsList() {
    return this.dropdown.$$('div[class*="react-select__option"]');
  }

  get assignButton() {
    return this.assignModal.$("#assign-protocol-button");
  }

  async openDropdown() {
    await this.dropdown.click();
  }

  async selectPatient(patientFirstName: string, patientLastName: string) {
    let patients = await this.patientsList;
    for (let patient of patients) {
      let patientText = await patient.getText();
      if (
        patientText.includes(patientFirstName) &&
        patientText.includes(patientLastName)
      ) {
        await patient.click();
        return;
      }
    }
  }

  async waitForDropdownToAppear() {
    await this.dropdown.$('div[class*="react-select__option"]').waitForDisplayed();
  }

  async assignPlanToPatientByNameAndSurname(
    patientFirstName: string,
    patientLastName: string
  ) {
    await this.openDropdown();
    await this.waitForDropdownToAppear();
    await this.selectPatient(patientFirstName, patientLastName);
    await this.assignButton.click();
  }
}
export default new AssignProgramPage();
