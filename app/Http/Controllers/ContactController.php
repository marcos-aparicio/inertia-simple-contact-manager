<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $user_id = auth()->user()->id;
        return Inertia::render('Contacts/Index', [
            'contacts' => Contact::where('user_id', $user_id)->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Contacts/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $user_id = auth()->user()->id;
        $data = $request->validated();
        $data['user_id'] = $user_id;

        $contact = Contact::create($data);
        return redirect('contacts')->with([
            'message' => 'Contact created successfully',
            'id' => $contact->id
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        $this->authorize('view', $contact);
        return Inertia::render('Contacts/Show', compact('contact'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        $this->authorize('update', $contact);
        return Inertia::render('Contacts/Edit', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreContactRequest $request, Contact $contact)
    {
        $this->authorize('update', $contact);
        $contact->update($request->validated());
        return redirect('contacts')->with([
            'type' => 'info',
            'message' => 'Contact updated successfully',
            'id' => $contact->id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $this->authorize('delete', $contact);
        Contact::destroy($contact->id);
        return redirect('contacts')->with([
            'type' => 'info',
            'message' => 'Contact deleted successfully',
            'id' => $contact->id
        ]);
    }
}
