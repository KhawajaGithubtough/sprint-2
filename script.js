class ValidateForm {
    constructor(name, description, assignedTo, duedate, form) {
        this.name = name;     // initialize variables in constuctor
        this.dscription = description;   
        this.assignedTo = assignedTo;   
        this.duedate = duedate;
        this.form = form;
    }

    // method to validate name input
    validateName(name) {
        const regName = /^[A-Z]'?[-a-zA-Z]+$/

        let isNameValid = false;
        let name_z = name.value.trim(); // remove leading and trailing white spaces
        let isNameHasValidLength = name_z.length < 0 || name_z.length > 8 ? false : true;

        // vallidating length, empty and regex pattern
        if( !(name_z === '') && isNameHasValidLength && (regName.test(name_Z)) ){
            isNameValid = true;
        }
        return isNameValid;
    }

    validateDueDate(duedate) {

        let isDueDateValid = false;
        let dueDate_z = duedate.value.trim(); // input value of Phone input field
        let isDueDateValidLength = dueDate_z.length < 0 || phone_z.length > 10 ? false : true; // validating date length field 

        const dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/

        // validating date for empty value and length and regex pattern


        if( !(dueDate_z === '') && isDueDateValidLength && dateReg.test(duedate)) {
            isDueDateValid = true;
        }
        return isDueDateValid;
    }

    validateDescription(description) {

            let value = description.value;
             // checking if description is empty or contain new lines 
            if (value == null || value === '' || value.indexOf('\n') > 0) {
                return false;
            }
    }

    validateAssignTo(assignedTo) {
        const regAssignTo = /^[A-Z]'?[-a-zA-Z]+$/

        let aasignTo = false;
        let assignTo_z = assignedTo.value.trim(); // remove leading and trailing white spaces
        let isassignToHasValidLength = assignTo_z.length < 0 || assignTo_z.length > 8 ? false : true;

        // vallidating length, empty and regex pattern
        if( !(name_z === '') && isassignToHasValidLength && (regAssignTo.test(regAssignTo)) ){
            isNameValid = true;
        }
        return isNameValid;
    }


}

let vform = new ValidateForm(document.querySelector('#name'), document.querySelector('#description'), document.querySelector('#tname') ,document.querySelector('#date'), document.querySelector('#formV'));

vform.addEventListener('submit', function(e) {
    let nameValid;
    let descriptionValid;
    let assignToValid;
    let dueDateValid;
    let submitvalid;

    nameValid = vform.validateName(vform.name);
    descriptionValid = vform.validateDescription(vform.descriptionValid);
    assignToValid =vform.validateAssignTo(vform.assignedTo);
    dueDateValid = vform.validateDueDate(vform.duedate);


    submitvalid = nameValid && descriptionValid && assignToValid && dueDateValid ;

    // Prevent default on form submission
    if (!submitOkay) {
        e.preventDefault();
    }
});
