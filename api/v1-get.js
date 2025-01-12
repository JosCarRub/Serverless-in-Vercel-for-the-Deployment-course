import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
    
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    
    const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
    );

    
    const { data, error } = await supabase
        .from('nombre')  
        .select('name, email');

    if (error) {
        return res.status(500).json({ success: false, message: error.message });
    }

    // Devolver los datos al frontend
    return res.status(200).json({ success: true, data });
}