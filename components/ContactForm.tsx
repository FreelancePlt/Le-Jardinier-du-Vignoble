"use client";

import { useState, FormEvent } from "react";
import { MessageSquare, Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    besoin: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-xl px-6 text-center">
          <CheckCircle
            size={48}
            strokeWidth={1.5}
            className="mx-auto mb-4 text-success"
          />
          <h2 className="text-2xl font-bold text-earth-900">
            Merci, votre demande a été envoyée !
          </h2>
          <p className="mt-3 text-earth-600">
            Nous vous recontactons sous 24h.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-xl px-6">
        {/* Titre */}
        <div className="mb-2 flex items-center gap-3">
          <MessageSquare
            size={24}
            strokeWidth={2}
            className="text-brand-600"
          />
          <h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
            Demandez votre devis gratuit
          </h2>
        </div>
        <p className="mb-10 text-earth-400">
          Réponse dans la journée par téléphone, sous 48h par email
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Prénom / Nom */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="prenom"
                className="mb-1 block text-sm font-medium text-earth-800"
              >
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                required
                value={form.prenom}
                onChange={handleChange}
                className="w-full rounded-lg border border-earth-200 bg-white px-4 py-2.5 text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
                placeholder="Votre prénom"
              />
            </div>
            <div>
              <label
                htmlFor="nom"
                className="mb-1 block text-sm font-medium text-earth-800"
              >
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                value={form.nom}
                onChange={handleChange}
                className="w-full rounded-lg border border-earth-200 bg-white px-4 py-2.5 text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
                placeholder="Votre nom"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-earth-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-earth-200 bg-white px-4 py-2.5 text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
              placeholder="votre@email.fr"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label
              htmlFor="telephone"
              className="mb-1 block text-sm font-medium text-earth-800"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              value={form.telephone}
              onChange={handleChange}
              className="w-full rounded-lg border border-earth-200 bg-white px-4 py-2.5 text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
              placeholder="06 00 00 00 00"
            />
          </div>

          {/* Ville / Code postal */}
          <div>
            <label
              htmlFor="ville"
              className="mb-1 block text-sm font-medium text-earth-800"
            >
              Ville / Code postal
            </label>
            <input
              type="text"
              id="ville"
              name="ville"
              required
              value={form.ville}
              onChange={handleChange}
              className="w-full rounded-lg border border-earth-200 bg-white px-4 py-2.5 text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
              placeholder="Vallet 44330"
            />
          </div>

          {/* Besoin principal */}
          <div>
            <label
              htmlFor="besoin"
              className="mb-1 block text-sm font-medium text-earth-800"
            >
              Besoin principal
            </label>
            <select
              id="besoin"
              name="besoin"
              required
              value={form.besoin}
              onChange={handleChange}
              className="w-full rounded-lg border border-earth-200 bg-white px-4 py-2.5 text-earth-800 focus:outline-none focus:ring-2 focus:ring-brand-600"
            >
              <option value="">Sélectionnez votre besoin</option>
              <option value="tonte">Tonte</option>
              <option value="taille">Taille haies / arbres</option>
              <option value="nettoyage">Nettoyage allées / terrasses</option>
              <option value="entretien-complet">Entretien complet</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-earth-800"
            >
              Message{" "}
              <span className="font-normal text-earth-400">(optionnel)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-earth-200 bg-white px-4 py-2.5 text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-brand-600"
              placeholder="Décrivez votre besoin..."
            />
          </div>

          {/* Bouton submit */}
          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-700 px-8 py-3 text-base font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-600"
          >
            <Send size={18} strokeWidth={2} />
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}
