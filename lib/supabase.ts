const SUPABASE_URL = 'https://mbjgirwuqzcjrllnokzj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_gEivTgSBsntxUkkJc3h9AA_-cmDpszh';

export async function createLead(payload: { name: string; email: string; company: string; message: string }) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/naifuzu_leads`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('Unable to submit request');
}
