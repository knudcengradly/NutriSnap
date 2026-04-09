package com.nutrisnap.app;

import android.os.Build;
import android.webkit.WebSettings;
import android.webkit.WebView;
import com.getcapacitor.Bridge;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private boolean webViewTuned;

    @Override
    public void onResume() {
        super.onResume();
        tuneWebViewOnce();
    }

    private void tuneWebViewOnce() {
        if (webViewTuned) {
            return;
        }
        Bridge bridge = getBridge();
        if (bridge == null) {
            return;
        }
        WebView webView = bridge.getWebView();
        if (webView == null) {
            return;
        }
        webViewTuned = true;

        webView.setOverScrollMode(WebView.OVER_SCROLL_IF_CONTENT_SCROLLS);
        webView.setLayerType(WebView.LAYER_TYPE_HARDWARE, null);

        WebSettings settings = webView.getSettings();
        settings.setDomStorageEnabled(true);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            webView.setRendererPriorityPolicy(WebView.RENDERER_PRIORITY_IMPORTANT, false);
        }
    }
}
