# Project Two

## Description
For this project, we inherited a project from another team. This project simulated a Tesla dealership by utilizing Visualforce pages to create a multi-page Experience Site. Our team's job was to create a new single-page application by using Lightning Aura Components. This task was twofold, as we had to recreate the Visualforce pages as Aura components, as well as create completely original components that also served the business needs of the company.

In addition to the coding requirements, we also had to maintain communication with the client, ensuring that the direction of the project was satisfactory, as well as to receive any updates regarding preliminary requirements.

## Technologies Used
- Visual Studio, ver. 1.59.0
- GitHub
- Salesforce

## Features
- Powerful single-page application with the following features:
   - Navigation bar allowing users to easily shift between components
   - Homepage that displays a weekly "Featured Product" and shows any appointments that the User has scheduled
   - Dealership page listing Tesla dealership locations
   - Pricebook Entry page listing the prices of different vehicle models for sale
   - Campaign Page (for Employees) showing any Campaigns that are currently underway
   - Appointment page, where customers can schedule a meeting with a sales representative, or a service representative
   - Product Catalogue, where customers can view detailed info about each model on sale, as well as seeing how many of each is in stock
   - Career page, where users can apply for a job at a Tesla dealership
- Robust application for Human Resources, facilitating employee tracking alongside the hiring process.
   - Utilizes a custom object, Occurrence, to keep track of employee misbehavior
   - Other custom objects -- Candidate, Position, Job Application -- facilitate the hiring process
   - Automated processes create a new Contact when someone is hired, using data from that person's Candidate info
   - Automated process also sends a task to a system administrator to create a new User, in case the new hire must use Salesforce.
- In-depth Workshop Services application, allowing Shop Managers to easily track customer appointments and work orders.
   - Utilizes a custom object, Shop Case, to keep track of appointments customers make for workshop services.
   - Automated processes assign Shop Cases to queues based on case priority.

To-Do
- Another styling pass on Experience Site
- Separation of customer vs. employee features on experience site

## Getting Started
### Salesforce Platform
- Created a new org.

### GitHub
- Created a new repository, duplicating the repository of the original team's project
- Created a kanban board for team members to keep track of each other's progress
- Cloned repository into a local version using Github Desktop
- After every team member had created a local repo, each one made a branch of their own to work on individual implementations

### Visual Studio
- Installed and utilized SFDX extension
- Connected Visual Studio to local copy of repo
- Connected Visual Studio to Salesforce organization by authorizing org and utilizing login credentials to grant access

## Usage
You can visit the Experience Site at the following link: https://auratesla-developer-edition.na162.force.com/s/

On the site, you can create new objects without having to log into the Salesforce org itself.
- Create a new Lead on the "Schedule Appointment" page, by scheduling an appointment with a sales representative.
- Likewise, you can create a new Shop Case on the "Schedule Appointment" page, by scheduling an appointment with a service representative.
   - All appointments scheduled by you will appear on the Home page, under the "My Appointments" section.
   - You can also schedule an appointment via the Product Catalogue
- You can submit yourself as a Candidate for a job application in the Career page
- You can also submit a job application in the Career page, using your own candidate information
- If you are logged in as an employee, you can create a new Campaign on the Campaign page

On the org, you can view all the objects created by customers. You can even create some additional objects yourself, such as the custom object, Dealership. This will show up on the site for customers to view.

On the org's Workshop Services application, you can go through the different priority queues to see each Shop Case. You can declare a Shop Case to be closed, or move it to another queue.

On the Human Resources application, you can view all candidates and their job applications. You can mark a Position as Closed, meaning it will no longer accept job applications. You can also select a Candidate to hire, which will automatically create a Contact with the custom record type "Employee." If the role requires the use of Salesforce, a system administrator will receive a task to get their User profile up and running.

## Contributors
- Jacob Schwartz
- Blake Prescott
- Carlo Mejia
