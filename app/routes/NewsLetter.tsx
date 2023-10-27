import { ActionFunction, json } from '@remix-run/node'
import { Form } from '@remix-run/react'

export let action: ActionFunction = async ({ request }) => {
    let formData = await request.formData();
    let email = formData.get("email");
    console.log(email, "user's email.....");
    return json({ ok: true })
}

export default function NewsLetter() {
    return (
        <main>
            <h1>Subscribe!</h1>
            <p>Don't miss any Updates..</p>
            <Form method='post'>
                <input type="First Name" name='First Name' placeholder='First Name' />
                <input type="Last Name" name='Last Name' placeholder='Last Name' />
                <button>Add</button>
            </Form>
        </main>
    )
}
