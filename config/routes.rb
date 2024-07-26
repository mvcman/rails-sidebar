Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  get "/attendence", to: "demo#attendence"
  get "/reimbursement", to: "demo#reimbursement"
  get "/my_documents", to: "demo#my_documents"
  get "/payslips", to: "demo#payslips"
  get "/employees", to: "demo#employees"
  get "/payruns", to: "demo#pay_runs"
  get "/advance_salary", to: "demo#advance_salary"
  get "/reports", to: "demo#reports"
  get "/loans", to: "demo#loans"
  get "/leaves", to: "demo#leaves"
  get "/organization", to: "demo#organization"
  get "/reimbursement_approvals", to: "demo#reimbursement_approvals"
  get "/offices", to: "demo#offices"
  get "/user_roles", to: "demo#user_roles"
  get "/departments", to: "demo#departments"
  get "/designations", to: "demo#designations"
  get "/leaves_settings", to: "demo#leaves_settings"
  get "/salary_settings", to: "demo#salary_settings"
  get "/statutory", to: "demo#statutory"
  get "/reimbursement_settings", to: "demo#reimbursement_settings"


  # Defines the root path route ("/")
  root "demo#index"
end
