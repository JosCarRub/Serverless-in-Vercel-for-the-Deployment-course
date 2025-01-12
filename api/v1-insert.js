import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
    
    const { name, email } = req.body;

    // Crear el cliente de Supabase
    const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY
    );

   
    const { data, error } = await supabase
        .from('nombre') // Asegúrate de tener la tabla 'users' en Supabase
        .insert([{ name, email }]);

    if (error) {
        console.error('Error:', error);
        return res.status(500).json({ success: false, message: error.message });
    }

    return res.status(200).json({ success: true, data });
}