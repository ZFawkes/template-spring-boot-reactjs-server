package io.project;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/app")
public class WebController {

    @RequestMapping(value = {"", "/", "/**"}, method = RequestMethod.GET)
    public ModelAndView index() {
        // return thymeleaf resources/templates/index.html
        return new ModelAndView("index");
    }
}
