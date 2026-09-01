"use client";

import { useEffect, useState } from "react";

const URL = "https://mbjgirwuqzcjrllnokzj.supabase.co";
const KEY = "sb_publishable_gEivTgSBsntxUkkJc3h9AA_-cmDpszh";

type Lead = { id:string; name:string; email:string; company:string; message:string; status:string; created_at:string };

export default function Admin() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [token,setToken]=useState(""); const [leads,setLeads]=useState<Lead[]>([]); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
  async function login(e:React.FormEvent){e.preventDefault();setLoading(true);setError("");try{const r=await fetch(`${URL}/auth/v1/token?grant_type=password`,{method:"POST",headers:{apikey:KEY,"Content-Type":"application/json"},body:JSON.stringify({email,password})});const d=await r.json();if(!r.ok)throw new Error(d.error_description||"Login failed");setToken(d.access_token);localStorage.setItem("naifuzu_admin_token",d.access_token)}catch(x){setError(x instanceof Error?x.message:"Login failed")}finally{setLoading(false)}}
  async function load(t:string){setLoading(true);setError("");try{const r=await fetch(`${URL}/rest/v1/naifuzu_leads?select=*&order=created_at.desc`,{headers:{apikey:KEY,Authorization:`Bearer ${t}`}});const d=await r.json();if(!r.ok)throw new Error(d.message||"Could not load leads");setLeads(d)}catch(x){setError(x instanceof Error?x.message:"Could not load leads")}finally{setLoading(false)}}
  useEffect(()=>{const t=localStorage.getItem("naifuzu_admin_token");if(t){setToken(t);load(t)}},[]);
  if(!token)return <main className="admin"><div className="admin-card"><div className="admin-brand">N / NAIFUZU</div><span>SECURE ADMIN</span><h1>Lead Dashboard</h1><p>Sign in to view your Book a Demo requests.</p><form onSubmit={login}><input type="email" placeholder="Admin email" value={email} onChange={e=>setEmail(e.target.value)} required/><input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required/><button disabled={loading}>{loading?"Signing in…":"Sign in →"}</button>{error&&<small>{error}</small>}</form></div></main>;
  return <main className="admin"><header className="admin-head"><div><div className="admin-brand">N / NAIFUZU</div><h1>Lead Dashboard</h1></div><button onClick={()=>{localStorage.removeItem("naifuzu_admin_token");setToken("")}}>Sign out</button></header><section className="admin-stats"><div><b>{leads.length}</b><span>Total leads</span></div><div><b>{leads.filter(x=>x.status==="new").length}</b><span>New</span></div></section><section className="lead-list">{loading?<p>Loading leads…</p>:leads.length===0?<p>No requests yet.</p>:leads.map(l=><article key={l.id}><div className="lead-top"><span>{l.status.toUpperCase()}</span><time>{new Date(l.created_at).toLocaleString()}</time></div><h2>{l.name}</h2><p><b>{l.company}</b> · {l.email}</p><div className="message">{l.message}</div></article>)}</section>{error&&<p className="admin-error">{error}</p>}</main>;
}
