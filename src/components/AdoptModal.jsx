"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";

export function AdoptModalPage({ isOwner, pet }) {
  const { petName } = pet

  const { data: session } = authClient.useSession();
  const name = session?.user?.name;
  const email = session?.user?.email

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());



    const payload = {
      petId: pet._id,
      petName: pet.petName,
      requesterName: session?.user?.name,
      requesterEmail: session?.user?.email,
      ownerEmail: pet.ownerEmail,
      date: data.date,
      message: data.message,
    };
    console.log(payload)
    const res = await fetch("http://localhost:5000/adoption-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log(result)
  };



  return (
    <Modal>

      <Button
        color="secondary"
        className="w-full font-semibold text-white disabled:cursor-not-allowed"
        size="lg"
        isDisabled={isOwner}
      >
        {isOwner ? "Owner this pet 🐶" : "Adopt Now 🐾"}
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>

            </Modal.Header>
            <Modal.Body className="p-4">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  <TextField className="w-full" name="petName" type="text" variant="secondary">
                    <Label>Pet Name</Label>
                    <Input value={petName || ""} placeholder="Enter your pet name" />
                  </TextField>

                  <TextField className="w-full" name="name" type="name" variant="secondary">
                    <Label>Your Name</Label>
                    <Input value={name || ""} placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" variant="secondary">
                    <Label>Email</Label>
                    <Input value={email || ""} readOnly />
                  </TextField>

                  <TextField className="w-full" name="date" variant="secondary">
                    <Label>Date</Label>
                    <Input type="date" />
                  </TextField>

                  <TextField className="w-full" variant="secondary">
                    <Label>Message</Label>
                    <textarea
                      name="message"
                      className="w-full min-h-30 rounded-md border px-3 py-2"
                      placeholder="Enter your message"
                    />
                  </TextField>

                  <Button type="submit">Send Request</Button>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>


            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}