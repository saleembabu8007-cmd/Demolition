// Vercel Serverless Function / Node API Handler
export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const errors: Record<string, string> = {};

    if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
      errors.name = 'Please enter your name.';
    }

    const cleanPhone = (data.phone || '').toString().replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!data.location || typeof data.location !== 'string' || data.location.trim().length < 2) {
      errors.location = 'Please specify your site location in Kerala.';
    }

    const validServices = [
      'Factory & Building Demolition',
      'Heavy Machinery Dismantling',
      'Industrial Metal Scrap Removal',
      'Site Clearance & Leveling',
    ];
    const service = validServices.includes(data.service)
      ? data.service
      : 'Factory & Building Demolition';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    const referenceId = 'AZI-' + Date.now().toString().slice(-6);

    // Verified business logging destination
    console.log(`[Azi Engineering Works] New Quotation Enquiry (${referenceId}):`, {
      name: data.name.trim(),
      phone: cleanPhone,
      service,
      location: data.location.trim(),
      notes: data.description ? data.description.trim() : 'N/A',
      receivedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      referenceId,
      message: 'Quotation request received successfully.',
    });
  } catch (err) {
    console.error('Error handling quotation request:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

