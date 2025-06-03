'use client';

import { FormEvent, useState } from 'react';

import { useMask } from '@react-input/mask';
import { EcsNotas } from '@/data/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Note() {
  const query = useMask({ mask: '___.___.___-__', replacement: { _: /\d/ } });
  const [error, setError] = useState<string | null>(null);
  const [student, setStudent] = useState<any | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setStudent(null);

    const rawCpf = query.current?.value || '';
    const cpf = rawCpf.replace(/\D/g, '');

    if (!validateCPF(cpf)) {
      setError('CPF inválido');
      return;
    }

    const studentFound = EcsNotas.find((item) => {
      const itemCpf = typeof item.CPF === 'number' ? String(item.CPF) : item.CPF;
      return itemCpf === cpf;
    });

    if (studentFound) {
      setStudent(studentFound);
    } else {
      setError('CPF não encontrado');
    }
  }

  function validateCPF(cpf: string): boolean {
    if (cpf.length !== 11 || isNaN(Number(cpf))) return false;
    return true;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center py-8 px-6 gap-4 w-11/12 mx-auto">
      <p className="py-2 text-xl mx-auto">Consulte sua nota</p>
      <p className="text-xs text-center">
        Digite apenas os números do seu CPF para consultar sua nota.
      </p>

      <Input type="text" ref={query} placeholder="000.000.000-00" />

      <Button type="submit" className="w-full">
        Consultar
      </Button>

      {student && (
        <div>
          <p>Estudante: {student.Nome}</p>
          <p>Atividades: {student['Atividades']}</p>
          <p>Extra: {student['Extra']}</p>
          <p>Prova: {student['Prova']}</p>
          <p>Recuperação: {student['Recuperação']}</p>
          <p>Média: {student['Total']}</p>
          <p>Resultado: {student.Resultado}</p>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
