export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      productInterest,
      product,
    } = body;

    // Support both productInterest and the existing product field
    const selectedProduct = productInterest || product;

    if (!name || !email || !phone || !selectedProduct) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is missing");

      return Response.json(
        {
          success: false,
          message: "Lead storage is not configured.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        productInterest: selectedProduct,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Google Sheets request failed: ${response.status}`
      );
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(
        result.message || "Lead storage failed."
      );
    }

    return Response.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry API error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to submit enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}