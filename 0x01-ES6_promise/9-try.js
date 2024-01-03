export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const valueof_function = mathFunction();
    queue.push(valueof_function);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
