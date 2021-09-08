`yarn add global lerna`

1. Create a micro-frontend architecture using the single-spa-js library with the following criteria:
    *   Root-Config - container which orchestrates a micro-frontend (mfe) / miniapp. ✅
    *	MiniApp1 should be at route “/loan-application” ✅
    *	MiniApp2 should be at route “/success” ✅
    *	MiniApp 1 - Form :
        *	A basic loan application form which contains at least 5 chances for user interaction using library: Formik . ✅
        *	Must include First name, Last name and email. The rest is up to you (insert critical thinking about construction loans here) ✅
        *	validate user input via custom npm package ( # 2 below) ✅
        *	A submit button to send user to success landing page ✅
    *	MiniApp 2 - Success Landing Page -
        *	A landing page with a success message saying “Congrats {{first name here}}, you submitted the form successfully” ✅
        *	Both MiniApps should be created using single-spa-react ✅
        *	styling is left up to what you’d like to incorporate (3rd party libraries ok) ✅
2.  Create and publish a public npm package which exposes functions to validate user input to a form.
    * Examples:    
        *	valid email pattern ✅
        *	Minimum / Maximum length ✅
        *	text only ✅
        *	numbers only ✅
    *	npm package should be imported into MiniApp1 to validate user input
5.  An example of testing components using Jest ✅
6.  Show us how you use Typescript ✅

